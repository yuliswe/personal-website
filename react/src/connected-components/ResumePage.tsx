import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { ImAlsoA } from "../stateless-components/ImAlsoA";
import { IntroduceSelf } from "../stateless-components/IntroduceSelf";
import { MyCareerSoFar } from "../stateless-components/MyCareerSoFar";
import { ResumeExperience } from "../stateless-components/ResumeExperience";
import { ResumeHeader } from "../stateless-components/ResumeHeader";
import { ResumeTemplate } from "../stateless-components/ResumeTemplate";
import { ResumeSection } from "../stateless-components/ResumeSection";
import queryString from "query-string";
import { MyStories, MyStoriesData } from "../stateless-components/MyStories";
import myStoriesData from "../text/stories";
import { WhyHireMe } from "../stateless-components/WhyHireMe";
import { jsPDF } from "jspdf";
import PrintIcon from "@mui/icons-material/Print";
import { AppContextType, defaultAppContext } from "../AppContext";
type _Props = {};

type _State = {
  urlKeywords: string[];
  myStories: MyStoriesData[];
};

function splitPages(n: Element, maxHeight: number, vMargin: number) {
  n.querySelectorAll("[data-page-break]").forEach((x) => x.remove());
  function insertSpace(n: Element, maxHeight: number, vMargin: number) {
    let { top } = n.getBoundingClientRect();
    let goodBottom = top;
    function _insertSpace(n: Element, maxY: number) {
      for (let child of n.children) {
        let { bottom } = child.getBoundingClientRect();
        if (bottom <= maxY) {
          goodBottom = Math.max(goodBottom, bottom);
        } else {
          if (
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
    return _insertSpace(n, top + maxHeight - vMargin);
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

  getHighlightKeywords(): string[] {
    let {
      query: { keywords },
    } = queryString.parseUrl(document.location.href, this.urlParseOptions);
    console.log(keywords);
    if (keywords == null) {
      return [];
    }
    if (typeof keywords === "string") {
      return [keywords];
    }
    return keywords.filter((x) => x) as string[];
  }

  setHighlightKeywords(keywords: string[]): void {
    let location = queryString.stringifyUrl(
      {
        url: document.location.href,
        query: { keywords },
      },
      this.urlParseOptions
    );
    window.history.replaceState({}, "", location);
    this.setState({
      urlKeywords: keywords,
    });
  }

  removeUrlKeywords(keywords: string[]): void {
    let oldKeywords = this.getHighlightKeywords();
    let newKeywords = oldKeywords.filter((x) => !keywords.includes(x));
    this.setHighlightKeywords(newKeywords);
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
    this.setState({
      urlKeywords: this.getHighlightKeywords(),
    });
  }

  componentDidUpdate(
    prevProps: Readonly<_Props>,
    prevState: Readonly<_State>,
    snapshot?: any
  ): void {
    if (this.resumeRef.current && this.resumeRef.current.paperRef.current) {
      splitPages(this.resumeRef.current.paperRef.current, 1056, 50);
    }
  }

  resumeRef = React.createRef<ResumeTemplate>();

  constructor(props: _Props) {
    super(props);
    this.state = {
      urlKeywords: [],
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
    pdf.html(this.resumeRef.current?.paperRef.current as HTMLElement, {
      callback: (doc) => {
        console.log(doc.getFontList());
        doc.save();
      },
      x: 0,
      y: 0,
      html2canvas: {
        scale:
          612 / (this.resumeRef.current?.paperRef.current?.scrollWidth || 1),
      },
    });
  }

  render() {
    return (
      <Box zIndex={1}>
        <Box my={10}>
          <IntroduceSelf></IntroduceSelf>
        </Box>
        <Grid container columns={2} spacing={10}>
          <Grid item md={1}>
            <MyCareerSoFar></MyCareerSoFar>
          </Grid>
          <Grid item md={1}>
            <ImAlsoA
              highlightKeywords={this.state.urlKeywords}
              onClick={(e, keywords, highlighted) =>
                highlighted
                  ? this.removeUrlKeywords(keywords)
                  : this.addUrlKeywords(keywords)
              }></ImAlsoA>
          </Grid>
          <Grid item md={2}>
            <WhyHireMe></WhyHireMe>
          </Grid>
        </Grid>
        <Stack my={10} spacing={2}>
          <Button
            onClick={() => this.downloadPdf()}
            startIcon={<PrintIcon></PrintIcon>}>
            Download Resume
          </Button>
          <ResumeTemplate
            mediaQuery={this._context.mediaQuery}></ResumeTemplate>
        </Stack>
        <Stack
          my={10}
          spacing={2}
          width='8.5in'
          top={0}
          zIndex={-1}
          visibility='hidden'
          position='fixed'>
          <ThemeProvider theme={this._context.specialThemeWithConstantSpacing!}>
            <ResumeTemplate
              id='force-font-for-pdf'
              ref={this.resumeRef}
              fixedMargin='50pt'></ResumeTemplate>
          </ThemeProvider>
        </Stack>
        <Stack my={10} spacing={2}>
          <MyStories stories={this.state.myStories}></MyStories>
        </Stack>
      </Box>
    );
  }
}
