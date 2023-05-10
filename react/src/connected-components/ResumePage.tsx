import { Box, Button, Grid, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { ImAlsoA } from "../stateless-components/ImAlsoA";
import { IntroduceSelf } from "../stateless-components/IntroduceSelf";
import { MyCareerSoFar } from "../stateless-components/MyCareerSoFar";
import { ResumeTemplate } from "../stateless-components/ResumeTemplate";
import queryString from "query-string";
import { MyStories } from "../stateless-components/MyStories";
import myStoriesData, { MyStory } from "../text/stories";
import { MyCareerGoal } from "../stateless-components/MyCareerGoal";
import { jsPDF } from "jspdf";
import PrintIcon from "@mui/icons-material/Print";
import { AppContextType, defaultAppContext } from "../AppContext";
import { allKeywords } from "../text/interests";
import { WhyConsiderMe } from "../stateless-components/WhyConsiderMe";
import { whyConsiderMe } from "../text/why-consider-me";
import { companyKeywords } from "../text/company-keywords-map";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "../stateless-components/SiteLayout";
import { AppBar } from "../stateless-components/AppBar";
type _Props = {};

type _State = {
  myStories: MyStory[];
};

function splitPages(n: Element, maxHeight: number = 1056, vMargin: number = 0) {
  n.querySelectorAll("[data-page-break]").forEach((x) => x.remove());
  function insertSpace(n: Element, maxHeight: number, vMargin: number) {
    let { top } = n.getBoundingClientRect();
    let goodBottom = top;
    let followNext: Element | null = null;
    function _insertSpace(n: Element, maxY: number) {
      for (let child of n.children) {
        let { bottom } = child.getBoundingClientRect();
        if (bottom <= maxY) {
          if (child.classList.contains("follow-next")) {
            followNext = child;
          } else {
            goodBottom = Math.max(goodBottom, bottom);
            followNext = null;
          }
        } else {
          if (followNext != null) {
            let space = document.createElement("div");
            space.setAttribute("data-page-break", "1");
            let spaceHeight = maxY - goodBottom + vMargin * 2;
            space.style.height = `${spaceHeight}px`;
            n.insertBefore(space, followNext);
          } else if (
            child.children.length === 0 ||
            child.classList.contains("keep-together")
          ) {
            let space = document.createElement("div");
            space.setAttribute("data-page-break", "1");
            let spaceHeight = maxY - goodBottom + vMargin * 2;
            space.style.height = `${spaceHeight}px`;
            n.insertBefore(space, child);
          } else {
            _insertSpace(child, maxY);
          }
          break;
        }
      }
    }
    return _insertSpace(n, top + maxHeight - 2 * vMargin);
  }

  let nPages = 1;
  while (nPages * maxHeight <= n.clientHeight) {
    insertSpace(n, maxHeight * nPages, vMargin);
    nPages++;
  }
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

  componentDidMount(): void {
    // if (
    //   this._context.routes?.params?.["company"] == undefined &&
    //   this._context.routes?.search?.get("keywords") == null
    // ) {
    //   //console.log("navigate");
    //   // document.location.search = new URLSearchParams("keywords=*").toString();
    //   // redirect(this._context.routes?.location.pathname + "?keywords=*");
    //   this._context.routes?.navigate({
    //     pathname: this._context.routes?.location.pathname,
    //     search: "?keywords=*",
    //   });
    // }
  }

  componentDidUpdate(
    prevProps: Readonly<_Props>,
    prevState: Readonly<_State>,
    snapshot?: any
  ): void {
    if (this.resumeRef.current && this.resumeRef.current.paperRef.current) {
      splitPages(this.resumeRef.current.paperRef.current);
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
    pdf.setFont("Helvetica");
    splitPages(this.resumeRef.current!.paperRef!.current as HTMLElement);
    pdf.html(this.resumeRef.current?.paperRef.current as HTMLElement, {
      callback: async (doc) => {
        let filename = (this.getCompanyFromUrl() || "resume") + ".pdf";
        // doc.output("dataurlnewwindow", {
        //   filename,
        // });
        let output = doc.output("blob");
        window.open(URL.createObjectURL(output), "_blank");
        // doc.save(filename);
      },
      x: 0,
      y: 0,
      html2canvas: {
        scale:
          612 / (this.resumeRef.current?.paperRef.current?.scrollWidth || 1),
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
