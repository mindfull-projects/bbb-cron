import { Handler } from 'aws-lambda';
import axios from 'axios';

export const handler: Handler = async _event => {
  try {
    await axios.get('https://bio-baum-bauer-hpq2.onrender.com');
  } catch (error) {
    // Do nothing
  }
};
