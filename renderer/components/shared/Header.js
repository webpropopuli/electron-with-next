import React from "react";
import Link from "next/link";
//import "../../styles/style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <Link href="/">
          <a className="david">home </a>
        </Link>
        <Link href="/blog">
          <a> What did I say? </a>
        </Link>
        <Link href="/portfolio">
          <a> What did I do? </a>
        </Link>
        <Link href="/about">
          <a> What am I like? </a>
        </Link>
        <Link href="/resume">
          <a> Where have I Been </a>
        </Link>

        {this.props.children}
      </div>
    );
  }
}
export default Header;
