import { DemoForm } from "./type";

const demo: DemoForm = {
  personalInfo: {
    profileInfo: {
      profilePhoto: "profile.jpg",
      fullname: "John Doe",
      profession: "Software Developer",
    },
    contactInfo: {
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St",
    },
    educationHistory: [
      {
        startDate: "2010",
        endDate: "2014",
        university: "Example University 1",
        profession: "Computer Science",
      },
      {
        startDate: "2015",
        endDate: "2018",
        university: "Example University 2",
        profession: "Electrical Engineering",
      },
    ],
    languageSkills: [
      {
        language: "English",
        proficiency: "Fluent",
      },
      {
        language: "Spanish",
        proficiency: "Intermediate",
      },
    ],
  },
  professionalInfo: {
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    workExperience: [
      {
        startDate: "2018",
        endDate: "2021",
        company: "TechCorp",
        profession: "Software Engineer",
        responsibilities: "Developing web applications.",
      },
      {
        startDate: "2021",
        company: "InnoTech",
        profession: "Senior Software Engineer",
        responsibilities: "Leading development teams.",
      },
    ],
    skills: [
      {
        skillName: "JavaScript",
        proficiency: "Advanced",
      },
      {
        skillName: "React",
        proficiency: "Expert",
      },
      {
        skillName: "Node.js",
        proficiency: "Advanced",
      },
    ],
  },
};

export default demo;
