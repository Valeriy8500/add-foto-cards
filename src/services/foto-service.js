export default class FotoService {

  _base = 'https://boiling-refuge-66454.herokuapp.com/images';

  getResource = (id) => {
    const res = fetch(`${this._base}/${id}`);
    const data = res.then((data) => data.json());

    return data.then((data) => {

      const obj = {
        url: data.url,
        comment: this.resComment(data),
        date: this.resDate(data)
      };

        return obj;
      })
  };

  resComment = (data) => {
    if (data.comments[0] === undefined) {
      return null;
    } else {
      const comment = data.comments[0];
      return comment.text;
    }
  };

  resDate = (data) => {
    if (data.comments[0] === undefined) {
      return null;
    } else {
      const comment = data.comments[0];
      return comment.date;
    }
  };

  getImagesArray = async () => {
    const res = await fetch(this._base);
    return res.json();
  };

  postComments = async (id, comments) => {
    const res = await fetch(`${this._base}/${id}/comments`, {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comments)
    });

    const data = await res.status;
    console.log(data);
    return data;
  };
};


