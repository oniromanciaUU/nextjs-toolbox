import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Copy the below text</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="rundll32 printui.dll,PrintUIEntry /y /in /n \\edp-uu-prn01.user.uu.se\eduPrint-UU" />
        <hr />
        <p className="description">
          rundll32 printui.dll,PrintUIEntry /y /in /n \\edp-uu-prn01.user.uu.se\eduPrint-UU



        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
