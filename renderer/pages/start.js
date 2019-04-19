//export default () => <span>This is Next.js speaking</span>;

import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

//import SuperComp from "../components/super";
class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: `(home page)` };
    console.log(`constructor`);
  }

  static async getInitialProps() {
    let fetchData = {};
    try {
      console.log(`getInitialProps`);

      const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/2");
      fetchData = resp.data;
    } catch (er) {
      console.log(er);
    }

    return { fetchData, initialData: [1, 2, 3, 4] };
  }

  componentWillMount() {
    console.log(`WillMount`);
  }
  componentDidMount() {
    console.log(`DidMount`);
  }

  chgTitle = () => {
    return this.setState({ title: `(egap emoh)` });
  };

  render() {
    console.log(`preRender`);
    const { title } = this.state;
    const { fetchData, initialData } = this.props;

    return (
      <BaseLayout>
        <h1>{title}</h1>
        <p>{fetchData.title}</p>
        <button onClick={this.chgTitle}>Change me</button>
      </BaseLayout>
    );
  }
}

export default Index;
