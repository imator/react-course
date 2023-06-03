// our-domain.com/new-meetup

import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    router.push("/"); //Ekleme işi bitince ana sayfaya yönlendir
  }

  return (
    <Fragment>
      <Head>
        <title>Add new a meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetupPage;
