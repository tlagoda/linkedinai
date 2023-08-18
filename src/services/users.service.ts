import axios from "axios";
import { config } from "./config/config";

export class UsersService {
  static async updateUser(uid: string, data: Record<string, any>) {
    try {
      const baseApiUrl =
        process.env.NODE_ENV === "production"
          ? config.production.apiUrl
          : config.development.apiUrl;
      const apiUrl = `${baseApiUrl}/users/${uid}`;

      await axios.put(apiUrl, data);
    } catch (error: any) {
      console.error(`Error while updating user: ${error.message}`);
    }
  }
}
