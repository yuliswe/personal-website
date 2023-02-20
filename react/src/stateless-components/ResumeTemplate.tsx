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
import { AppContextType, mediaQuery } from "../AppContext";
import { Config } from "../config";
import { intersects, keywordShouldShow } from "../utils";

type _Props = {
  fixedMargin?: string;
  id?: string;
  mediaQuery?: typeof mediaQuery;
  urlKeywords: string[];
  isPrintedVersion: boolean;
  jobTitle: string;
  websiteUrl: URL;
};

/**
 * The PDF style resume section.
 */
export class ResumeTemplate extends React.PureComponent<_Props> {
  paperRef = React.createRef<HTMLDivElement>();
  render() {
    return (
      <Paper id={this.props.id} ref={this.paperRef} sx={{ borderRadius: 0.5 }}>
        <Stack spacing={3} m={this.props.fixedMargin || 10}>
          <ResumeHeader
            jobTitle={this.props.jobTitle}
            websiteUrl={this.props.websiteUrl}
            mediaQuery={this.props.mediaQuery}
          />
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
          {/* <ResumeSection title='Products'>
            <ResumeExperience
              jobTitle='B.Math in Computer Science'
              company='University of Waterloo'
              location='Ontario'
              date='Sept/2013 - Sept/2019'
              mediaQuery={this.props.mediaQuery}>
              <Typography>
                Bachelor of Mathematics, major in Computer Science (CO-OP).
              </Typography>
              <Typography>
                Joint majors in Combinatorics & Optimization and Computational
                Mathematics.
              </Typography>
              <Typography>
                Undergraduate courses: Software Testing, Quality Assurance &
                Maintenance, Operation System, Algorithms, Algorithm Design &
                Analysis, Machine Learning, Conflicts Resolution.
              </Typography>
            </ResumeExperience>
          </ResumeSection> */}
          {this.props.isPrintedVersion && (
            <Typography variant='caption'>
              This is a highlighted version of a complete resume. Visit
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
