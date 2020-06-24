import React, { useState } from "react";
import classes from "./Artisans.module.css";
import Input from "../../components/UI/Input/Input";
import Tiles from "../../components/Tiles/Tiles";
import Modal from "../../components/UI/Modal/Modal";
import Artisan from "../../components/Artisan/Artisan";
import FormButtonSet from "../../components/Form/FormButtonSet/FormButtonSet";

const Artisans = (props) => {
  const artisans = [
    {
      uniqueName: "AA1",
      title: "Artisan1",
      address: {
        street: "123 dummy",
        city: "New delhi",
        state: "New Delhi",
        zip: "110049",
        country: "India",
      },
      contactNo: "+919810184560",
      email: "test@test.com",
    },
    {
      uniqueName: "AA2",
      title: "Artisan 2 is going to have fun",
      address: {
        street: "123 dummy",
        city: "New delhi",
        state: "New Delhi",
        zip: "110049",
        country: "India",
      },
      contactNo: "+919810184560",
      email: "test@test.com",
    },
    {
      uniqueName: "AA3",
      title: "Artisan 1 is also there and will enjoy",
      address: {
        street: "123 dummy",
        city: "New delhi",
        state: "New Delhi",
        zip: "110049",
        country: "India",
      },
      contactNo: "+919810184560",
      email: "test@test.com",
    },
  ];
  const [displayModal, setDisplayModal] = useState(false);
  const [selected, setSelectedArtisan] = useState({});

  const exploreArtisan = (id) => {
    const selectedArtisan = artisans.filter(
      (value) => value.uniqueName === id
    )[0];
    setSelectedArtisan(selectedArtisan);
    setDisplayModal(true);
  };

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const handleCancel = () => {
    alert("cicked cancel");
    setDisplayModal(false);
  };

  const handleSubmit = () => {
    alert("submit cancel");
    setDisplayModal(false);
  };

  let modal = null;
  if (displayModal) {
    modal = (
      <Modal
        click={toggleModal}
        title={`${selected.uniqueName} - ${selected.title}`}
      >
        <Artisan {...selected} />
        <div className={classes.Buttons}>
          <FormButtonSet
            cancelName="Cancel"
            submitName="Submit"
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      </Modal>
    );
  }

  return (
    <React.Fragment>
      <div className={classes.Artisans}>
        <div className={classes.Header}>
          <div className={classes.Title}>
            <h3>Artisan Manager</h3>
            <div className={classes.SearchLarge}>
              <div className={classes.SearchIcon}>
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <div className={classes.SearchField}>
                <Input type="text" placeholder="Search by name..." />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.SearchSmall}>
          <div className={classes.SearchIcon}>
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div className={classes.SearchField}>
            <Input type="text" placeholder="Search by name..." />
          </div>
        </div>
        <Tiles data={artisans} clicked={exploreArtisan} />
      </div>
      {modal}
    </React.Fragment>
  );
};

export default Artisans;
