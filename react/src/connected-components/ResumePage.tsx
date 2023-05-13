import PrintIcon from "@mui/icons-material/Print";
import { Box, Button, Grid, Stack, ThemeProvider } from "@mui/material";
import { jsPDF } from "jspdf";
import queryString from "query-string";
import React from "react";
import { Helmet } from "react-helmet-async";
import { AppContextType, defaultAppContext } from "../AppContext";
import { Arial } from "../Arial";
import { ArialBold } from "../Arial-bold";
import { AppBar } from "../stateless-components/AppBar";
import { ImAlsoA } from "../stateless-components/ImAlsoA";
import { IntroduceSelf } from "../stateless-components/IntroduceSelf";
import { MyCareerGoal } from "../stateless-components/MyCareerGoal";
import { MyCareerSoFar } from "../stateless-components/MyCareerSoFar";
import { MyStories } from "../stateless-components/MyStories";
import { ResumeTemplate } from "../stateless-components/ResumeTemplate";
import { SiteLayout } from "../stateless-components/SiteLayout";
import { WhyConsiderMe } from "../stateless-components/WhyConsiderMe";
import { companyKeywords } from "../text/company-keywords-map";
import { allKeywords } from "../text/interests";
import myStoriesData, { MyStory } from "../text/stories";
import { whyConsiderMe } from "../text/why-consider-me";
type _Props = {};

type _State = {
  myStories: MyStory[];
};

function px2pt(px: number): number {
  return px * 0.75;
}

function pt2px(pt: number): number {
  return pt / 0.75;
}

function splitPages(
  n: Element,
  pageHeight: number = 1056,
  vMargin: number = pt2px(40)
) {
  n.querySelectorAll("[data-page-break]").forEach((x) => x.remove());
  const { top } = n.getBoundingClientRect();
  let goodBottom = top; // keep track of the bottom of the last element that fit on the page
  let followNext: Element | null = null;
  // let pageStartY = top;
  let pageEndY = top + pageHeight;
  function _insertSpace(n: Element) {
    for (let child of n.children) {
      if (child.clientHeight === 0) {
        continue; // skip empty elements
      }
      let { bottom } = child.getBoundingClientRect();
      const childStyle = window.getComputedStyle(child);
      bottom -= Number.parseInt(childStyle.marginBottom);
      bottom -= Number.parseInt(childStyle.paddingBottom);
      // if element + margin is within page. requires at least half of margin at
      // bottom
      if (bottom + vMargin / 2 <= pageEndY) {
        if (child.classList.contains("follow-next")) {
          followNext = child;
        } else {
          goodBottom = Math.max(goodBottom, bottom);
          followNext = null;
        }
      }
      // if element + margin is taller than page, need to insert space
      else {
        let firstItemInNextPage = child;
        // if there is a follow-next element, insert space before it instead.
        // Follow-next elements always stays together with the next element in a
        // page split.
        if (followNext != null) {
          firstItemInNextPage = followNext;
        }
        // if the current item is a leaf or a keep-together element, insert
        // space before it instead. Keep together elements is never split across
        // pages.
        if (
          child.children.length === 0 ||
          child.classList.contains("keep-together")
        ) {
          const space = document.createElement("div");
          space.setAttribute("data-page-break", "1");
          const spaceHeight = pageEndY - goodBottom + vMargin;
          space.style.height = `${spaceHeight}px`;
          n.insertBefore(space, firstItemInNextPage);
          // pageStartY = pageEndY;
          pageEndY += pageHeight;
        } else {
          _insertSpace(child);
        }
      }
    }
  }
  _insertSpace(n);
}

function addHyperLinks(root: Element, doc: jsPDF) {
  const rootRect = root.getBoundingClientRect();
  function recurAddHyperLinks(n: Element) {
    if (n instanceof HTMLAnchorElement) {
      const anchorEl = n.getBoundingClientRect();
      const x = px2pt(anchorEl.x - rootRect.x);
      const y = px2pt(anchorEl.y - rootRect.y);
      const w = px2pt(anchorEl.width);
      const h = px2pt(anchorEl.height);
      doc.link(x, y, w, h, {
        url: n.href,
      });
    }
    for (let child of n.children) {
      recurAddHyperLinks(child);
    }
  }
  recurAddHyperLinks(root);
}

export class ResumePage extends React.Component<_Props, _State> {
  static contextType = AppContextType;
  //   declare context: React.ContextType<typeof Context>;

  get _context(): typeof defaultAppContext {
    return this.context as any;
  }

  getKeywordsFromUrl(): string[] {
    let {
      query: { keywords },
    } = queryString.parseUrl(
      this._context.routes?.location.search || "?",
      this.urlParseOptions
    );
    if (keywords == null) {
      return [];
    }
    if (typeof keywords === "string") {
      return [keywords];
    }
    return keywords.filter((x) => x) as string[];
  }

  getCompanyFromUrl(): string | null {
    if (this._context.routes?.params?.["company"] != null) {
      return this._context.routes.params["company"];
    }
    let {
      query: { company },
    } = queryString.parseUrl(
      this._context.routes?.location.search || "?",
      this.urlParseOptions
    );
    if (company == null) {
      return null;
    }
    if (typeof company === "string") {
      return company;
    }
    return null;
  }

  getKeywordsFromUrlCompany(): string[] {
    let com = this.getCompanyFromUrl();
    if (com == null) {
      return [];
    }
    let data = companyKeywords[com];
    if (data == null) {
      return [];
    }
    return data.defaultKeywords;
  }

  getJobTitle(): string {
    let com = this.getCompanyFromUrl();
    if (com != null) {
      let data = companyKeywords[com];
      if (data != null) {
        return data.jobTitle;
      }
    }
    return "Software Engineer";
  }

  getHighlightKeywords(): string[] {
    let keywords = this.getKeywordsFromUrl();
    keywords.push(...this.getKeywordsFromUrlCompany());
    return Array.from(new Set(keywords));
  }

  getEnabledKeywords(): string[] {
    let keywords = this.getKeywordsFromUrl();
    keywords.push(...this.getKeywordsFromUrlCompany());
    if (keywords.includes("*")) {
      return Array.from(allKeywords);
    }
    if (keywords.length === 0) {
      return Array.from(allKeywords);
    }
    return Array.from(new Set(keywords));
  }

  setHighlightKeywords(keywords: string[]): void {
    //console.log("Set keywords: ", keywords);
    if (keywords.includes("*")) {
      keywords = Array.from(allKeywords);
    }
    keywords.push(...this.getKeywordsFromUrlCompany());
    keywords = Array.from(new Set(keywords));
    this._context.routes?.navigate({
      pathname: this._context.routes?.location.pathname,
      search: queryString.stringifyUrl(
        {
          url: "",
          query: { keywords },
        },
        this.urlParseOptions
      ),
    });
  }

  removeUrlKeywords(keywords: string[]): void {
    //console.log("Remove keywords: ", keywords);
    let oldKeywords = this.getHighlightKeywords();
    if (keywords.includes("*")) {
      // eg, click on Select All to deselect all
      this.setHighlightKeywords([]);
      return;
    }
    if (oldKeywords.includes("*")) {
      // eg, click on a non * keyword to, cancel select all, and deselect that keyword
      this.setHighlightKeywords(
        Array.from(allKeywords).filter(
          (x) => !keywords.includes(x) && x !== "*"
        )
      );
      return;
    }
    let newKeywords = oldKeywords.filter(
      (x) => !keywords.includes(x) && x !== "*"
    );
    this.setHighlightKeywords(newKeywords);
  }

  getWebsiteUrlForCompany(): URL {
    let com = this.getCompanyFromUrl();
    if (com != null) {
      return new URL(`https://yuli.SE/${com}`);
    }
    return new URL("https://yuli.SE/");
  }

  get urlParseOptions() {
    return {
      arrayFormat: "separator",
      arrayFormatSeparator: ",",
    } as const;
  }

  addUrlKeywords(keywords: string[]): void {
    let oldKeywords = this.getHighlightKeywords();
    let newKeywords = [
      ...oldKeywords,
      ...keywords.filter((x) => !oldKeywords.includes(x)),
    ];
    this.setHighlightKeywords(newKeywords);
  }

  componentDidMount(): void {}

  componentDidUpdate(
    prevProps: Readonly<_Props>,
    prevState: Readonly<_State>,
    snapshot?: any
  ): void {
    if (this.resumeRef.current && this.resumeRef.current.paperRef.current) {
      const rootEl = this.resumeRef.current.paperRef.current;
      splitPages(rootEl);
    }
  }

  resumeRef = React.createRef<ResumeTemplate>();

  constructor(props: _Props) {
    super(props);
    this.state = {
      myStories: myStoriesData,
    };
  }

  downloadPdf() {
    const pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "letter",
      putOnlyUsedFonts: true,
      compress: true,
    });
    pdf.addFileToVFS("Arial.ttf", Arial);
    pdf.addFont("Arial.ttf", "Arial", "normal");
    pdf.addFileToVFS("Arial-bold.ttf", ArialBold);
    pdf.addFont("Arial-bold.ttf", "Arial", "bold");
    pdf.setFont("Arial");
    // pdf.setFontSize(11);
    const rootEl = this.resumeRef.current!.paperRef!.current as HTMLElement;
    splitPages(rootEl);
    addHyperLinks(rootEl, pdf);
    pdf.html(rootEl as HTMLElement, {
      callback: async (doc) => {
        let filename =
          "yuli-se-" + (this.getCompanyFromUrl() || "resume") + ".pdf";
        // doc.output("dataurlnewwindow", {
        //   filename,
        // // });
        // let output = doc.output("blob");
        // window.open(URL.createObjectURL(output), "_blank");
        doc.save(filename);
      },
      x: 0,
      y: 0,
      html2canvas: {
        scale: 612 / (rootEl.scrollWidth || 1),
      },
    });
  }

  getWhyConsiderMe() {
    let com = this.getCompanyFromUrl();
    if (com == null) {
      return null;
    }
    let data = whyConsiderMe[com];
    if (data == null) {
      return null;
    }
    return data;
  }

  renderWhyConsiderMe() {
    let com = this.getCompanyFromUrl();
    if (com == null) {
      return false;
    }
    let data = whyConsiderMe[com];
    if (data == null) {
      return false;
    }
    return <WhyConsiderMe {...data}></WhyConsiderMe>;
  }

  render() {
    return (
      <SiteLayout appBar={<AppBar />}>
        <Helmet>
          <title>Yu | {this.getJobTitle()}</title>
        </Helmet>
        <Stack zIndex={1} spacing={10}>
          <IntroduceSelf></IntroduceSelf>
          {this.renderWhyConsiderMe()}
          <Box>
            {/* This is required. Grid cannot be a direct child of Stack. */}
            <Grid container spacing={10}>
              <Grid item md={6}>
                <MyCareerSoFar></MyCareerSoFar>
              </Grid>
              <Grid item md={6}>
                <ImAlsoA
                  highlightKeywords={this.getHighlightKeywords()}
                  onClick={(e, keywords, highlighted) =>
                    highlighted
                      ? this.removeUrlKeywords(keywords)
                      : this.addUrlKeywords(keywords)
                  }></ImAlsoA>
              </Grid>
            </Grid>
          </Box>
          <MyCareerGoal></MyCareerGoal>
          <Stack my={10} spacing={2}>
            <Button
              onClick={() => this.downloadPdf()}
              startIcon={<PrintIcon></PrintIcon>}>
              Print Resume
            </Button>
            <ResumeTemplate
              mediaQuery={this._context.mediaQuery}
              jobTitle={this.getJobTitle()}
              whyConsiderMe={null}
              websiteUrl={this.getWebsiteUrlForCompany()}
              isPrintedVersion={false}
              urlKeywords={this.getEnabledKeywords()}></ResumeTemplate>
          </Stack>
          <Box
            width='8.5in'
            top={0}
            left={0}
            position='fixed'
            zIndex={-1}
            visibility='hidden'>
            <ThemeProvider
              theme={this._context.specialThemeWithConstantSpacing!}>
              <ResumeTemplate
                id='force-font-for-pdf'
                jobTitle={this.getJobTitle()}
                ref={this.resumeRef}
                whyConsiderMe={this.getWhyConsiderMe()}
                websiteUrl={this.getWebsiteUrlForCompany()}
                isPrintedVersion={true}
                urlKeywords={this.getEnabledKeywords()}
                fixedMargin='40pt'></ResumeTemplate>
            </ThemeProvider>
          </Box>
          <Stack my={10} spacing={2}>
            <MyStories
              stories={this.state.myStories}
              urlKeywords={this.getEnabledKeywords()}></MyStories>
          </Stack>
        </Stack>
      </SiteLayout>
    );
  }
}
