import questions from "@/data/questions.json";

interface SurveyFormData {}

export type Question = {
  id: number;
  text: string;
  options: string[];
};

// Forcing async as the not mock version will be asynchronous
export async function sendFormData(data: SurveyFormData) {
  console.log(data);
}

export async function getQuestions(): Promise<Question[]> {
  return questions as Question[];
}
