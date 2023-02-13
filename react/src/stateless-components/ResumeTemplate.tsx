import { Container, Paper, Typography } from "@mui/material";
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

type _Props = {
  fixedMargin?: string;
  id?: string;
  mediaQuery?: typeof mediaQuery;
};

export class ResumeTemplate extends React.PureComponent<_Props> {
  paperRef = React.createRef<HTMLDivElement>();
  render() {
    return (
      <Paper id={this.props.id} ref={this.paperRef} sx={{ borderRadius: 0.5 }}>
        <Stack spacing={3} m={this.props.fixedMargin || 10}>
          <ResumeHeader
            jobTitle='Senior Software Enginner'
            companyShortCode='xxx'
            mediaQuery={this.props.mediaQuery}
          />
          <ResumeSection title='Employment'>
            {employmentData.map((item, index) => (
              <ResumeExperience
                key={index}
                jobTitle={item.title}
                company={item.company}
                location={item.location}
                date={item.date}
                mediaQuery={this.props.mediaQuery}>
                {item.bulletPoints.map((x, index) => (
                  <Typography key={index}>{x.text}</Typography>
                ))}
              </ResumeExperience>
            ))}
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
            {skillData.map((item, index) => (
              <ResumeSkills key={index} title={item.title}>
                {item.bulletPoints.map((x, index) => (
                  <Typography key={index}>{x}</Typography>
                ))}
              </ResumeSkills>
            ))}
          </ResumeSection>
          <ResumeSection title='Products'>
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
          </ResumeSection>
        </Stack>
      </Paper>
    );
  }
}
