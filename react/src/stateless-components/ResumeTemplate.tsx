import { Container, Link, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSection } from "./ResumeSection";

// type _Props = {
//     children: React.ReactNode,
// }

import employmentData from "../text/employment";
import educationData from "../text/education";
import skillData from "../text/skills";
import { ResumeSkills } from "./ResumeSkills";
import { mediaQuery } from "../AppContext";
import { Config } from "../config";
import { keywordShouldShow } from "../utils";
import { projects } from "../text/projects";
import { ResumeProject } from "./ResumeProject";

type _Props = {
  fixedMargin?: string;
  id?: string;
  mediaQuery?: typeof mediaQuery;
  urlKeywords: string[];
  isPrintedVersion: boolean;
  jobTitle: string;
  websiteUrl: URL;
  whyConsiderMe: { title: string; text: string } | null;
};

/**
 * The PDF style resume section.
 */
export class ResumeTemplate extends React.PureComponent<_Props> {
  paperRef = React.createRef<HTMLDivElement>();

  showProjectSection() {
    return projects.some((proj) =>
      keywordShouldShow(this.props.urlKeywords, proj.keywords)
    );
  }
  render() {
    return (
      <Paper id={this.props.id} ref={this.paperRef} sx={{ borderRadius: 0.5 }}>
        <Stack spacing={3} m={this.props.fixedMargin || 10}>
          <ResumeHeader
            jobTitle={this.props.jobTitle}
            websiteUrl={this.props.websiteUrl}
            mediaQuery={this.props.mediaQuery}
          />
          {this.props.whyConsiderMe && (
            <ResumeSection
              title={
                this.props.whyConsiderMe.title?.toUpperCase() ||
                "WHY CONSIDER ME"
              }>
              <Typography>{this.props.whyConsiderMe.text}</Typography>
            </ResumeSection>
          )}
          <ResumeSection title='Employment'>
            {employmentData.map(
              (exp, index) =>
                keywordShouldShow(this.props.urlKeywords, exp.keywords) && (
                  <Stack key={index}>
                    {exp.keywords && Config.displayKeywods && (
                      <Typography color='red'>
                        {exp.keywords.join(", ")}
                      </Typography>
                    )}
                    <ResumeExperience
                      key={index}
                      jobTitle={exp.title}
                      company={exp.company}
                      location={exp.location}
                      date={exp.date}
                      mediaQuery={this.props.mediaQuery}>
                      {exp.bulletPoints.map(
                        (pt, index) =>
                          keywordShouldShow(
                            this.props.urlKeywords,
                            pt.keywords
                          ) && (
                            <Stack key={index}>
                              <Typography>{pt.text}</Typography>
                              {Config.displayKeywods && (
                                <Typography color='blue'>
                                  {pt.keywords?.join(", ")}
                                </Typography>
                              )}
                            </Stack>
                          )
                      )}
                    </ResumeExperience>
                  </Stack>
                )
            )}
          </ResumeSection>
          <ResumeSection title='Education' className='keep-together'>
            {educationData.map((item, index) => (
              <ResumeExperience
                key={index}
                jobTitle={item.title}
                company={item.company}
                location={item.location}
                date={item.date}
                mediaQuery={this.props.mediaQuery}>
                {item.bulletPoints.map((x, index) => (
                  <Typography key={index}>{x}</Typography>
                ))}
              </ResumeExperience>
            ))}
          </ResumeSection>
          <ResumeSection title='Software Enginnering'>
            {skillData.map(
              (item, index) =>
                keywordShouldShow(this.props.urlKeywords, item.keywords) && (
                  <Stack key={index}>
                    {Config.displayKeywods && (
                      <Typography color='red'>
                        {Config.displayKeywods && item.keywords.join(", ")}
                      </Typography>
                    )}
                    <ResumeSkills key={index} title={item.title}>
                      {item.bulletPoints.map((x, index) => (
                        <Typography key={index} display='inline'>
                          {x}
                        </Typography>
                      ))}
                    </ResumeSkills>
                  </Stack>
                )
            )}
          </ResumeSection>
          {this.showProjectSection() && (
            <ResumeSection title='Portfolio'>
              {projects.map((project) => (
                <ResumeProject
                  key={project.title}
                  {...project}
                  mediaQuery={this.props.mediaQuery}></ResumeProject>
              ))}
            </ResumeSection>
          )}
          {this.props.isPrintedVersion && (
            <Typography variant='caption'>
              Visit
              <Link href={this.props.websiteUrl.href} px={0.5}>
                {this.props.websiteUrl.href}
              </Link>{" "}
              to learn more about me.
            </Typography>
          )}
        </Stack>
      </Paper>
    );
  }
}
