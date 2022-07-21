import axios from 'axios';
class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // returns promise
  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;

    // return fetch(
    //   `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
    //   this.getRequestOptions
    // )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error('Could not fetch the data that resource');
    //     }
    //     return response.json();
    //   })
    //   .then((result) => {
    //     // console.log(result);
    //     return result.items;
    //   });
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
    //   return fetch(
    //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
    //     this.getRequestOptions
    //   )
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw Error('Could not fetch the data that resource');
    //       }
    //       return response.json();
    //     })
    //     .then((result) =>
    //       result.items.map((item) => ({ ...item, id: item.id.videoId }))
    //     );
  }
}

export default Youtube;
