import { Question, getQuestions } from "@/lib/apiClient";
import { useEffect, useState } from "react";

export function useQuestions(): [Question[], boolean, string | undefined] {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setError(undefined);
    getQuestions()
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return [questions, loading, error];
}
