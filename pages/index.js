import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

// const DUMMY_MEETUP = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "Saray Bosna 12,12345 Europa",
//     description: "This is first meetup",
//   },
//   {
//     id: "m2",
//     title: "Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
//     address: "Saray Bosna 25 ,12345 Europa",
//     description: "This is second meetup",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log("req:", req, " res: ", res);

//   fetch data from api
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//     fallback: false,
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://aorman:jc5K2skLuKNiPE5T@cluster0.zlbxmfy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
