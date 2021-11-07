import axios from "axios";

export default class EpicAPI {
	static async getImage(date: string) {
		const dateArray = date.split('-');
		const result = await axios.get(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`);
    if (result?.data?.length > 0) {
      const item = result.data[0];
      console.log("item:", item);
      const archive = `https://epic.gsfc.nasa.gov/archive/natural/${dateArray[0]}/${dateArray[1]}/${dateArray[2]}/png/`;
      const name = item.image + '.png';
      return archive + name;
    }
		return '';
	}
}
