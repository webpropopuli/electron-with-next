import react from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Blog extends react.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    let posts = {};
    try {
      const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = resp.data;
    } catch (er) {
      console.log(er);
    }

    return { posts: posts.splice(0, 10) }; // grab first 10 only
  }

  renderAllPosts(posts) {
    return posts.map(p => {
      return <li key={p.id}>{p.title}</li>;
    });
  }

  render(props) {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>What did I Say?</h1>
        <ul>{this.renderAllPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}

export default Blog;
