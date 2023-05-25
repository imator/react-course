import Layout from "@/components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Saray Bosna 12,12345 Europa",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Saray Bosna 25 ,12345 Europa",
    description: "This is second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}

export default HomePage;
