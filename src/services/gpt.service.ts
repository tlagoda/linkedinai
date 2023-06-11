import axios from "axios";

export class GptService {
  static async generate(prompt: string) {
    try {
      const response = await axios.get("http://localhost:3000/posts/generate", {
        params: {
          prompt,
        },
      });
      return response.data.text;
    } catch (error) {
      console.error(`Error generating post: ${error}`);
    }
  }
}
