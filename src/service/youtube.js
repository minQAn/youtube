class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  // returns promise
  async mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch the data that resource');
        }
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        return result.items;
      });
  }

  async search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw Error('Could not fetch the data that resource');
        }
        return response.json();
      })
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}

export default Youtube;
