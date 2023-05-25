import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      title="First Meetup"
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      address="Saray Bosna 12,12345 Europa"
      description="This is first meetup"
    />
  );
}
export default MeetupDetails;
