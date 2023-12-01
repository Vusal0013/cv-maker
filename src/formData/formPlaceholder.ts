import { IFormType } from "../types/";
import profilePhoto from "../assets/r01/ProfilePhoto.png";

const formPlaceholder: IFormType = {
  personalInfo: {
    profileInfo: {
      profilePhoto: {
        src: profilePhoto,
        isRequired: true,
      },
      firstName: "John",
      lastName: "Doe",
      profession: "Software Developer",
      birthDate: {
        isRequired: true,
        day: "24",
        month: "Yanvar",
        year: "1996",
      },
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
        proficiency: "100%",
      },
      {
        language: "Spanish",
        proficiency: "65%",
      },
    ],
  },
  professionalInfo: {
    about: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad tempora ipsa, tempore qui cum voluptate, sit repudiandae error reiciendis facere cupiditate, iste iusto doloribus! Ipsum mollitia doloribus voluptate deleniti quas nobis, laudantium dicta ea recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsam tenetur quae ad consequatur aspernatur, distinctio esse harum consectetur officia ex facere dolor molestiae incidunt nemo quisquam nam eos aliquam vero! Aut quia voluptatum odio accusantium maiores assumenda, quisquam quae atque ducimus impedit aspernatur eum sequi voluptates eligendi odit qui.",
    ],
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
        proficiency: "91%",
      },
      {
        skillName: "React",
        proficiency: "100%",
      },
      {
        skillName: "Node.js",
        proficiency: "85%",
      },
    ],
  },
};

export default formPlaceholder;
