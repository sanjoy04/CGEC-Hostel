import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Container, Col } from "react-bootstrap";
import { Card, CardGroup, CardImg } from "react-bootstrap";

import {
  Heading1,
  Heading,
  FacilitiesTop,
  People,
  Peoples,
  MainContainer,
  FacilitiesText,
  Responsibitity,
  Heading2,
  FacilitiesCard,
  Row,
} from "./FacilitiesStyle";

function Facilities() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer>
        <FacilitiesTop>
          <Heading1>Facilities of hostel</Heading1>
          <FacilitiesText>
            CGEC provides hostel accommodation to students within the institute premises. There are two hostels Sukanta Chhatrabas Boys Hostel having a capacity of 460 seats with three seated air-cooled rooms and Noran Girls Hostel having a capacity of 265 seats with double seated air-cooled rooms. The hostel is administered by chief warden and assisted by warden/assistant warden. Each room is provided with furniture needed by a student i.e. bed, table, chair, cupboard, etc. Hostel rooms are allotted on "first come first serve basis".
          </FacilitiesText>
          <FacilitiesText>
            There is a separate mess for boys and girls. The entire mess area is air-cooled and students are provided with breakfast, lunch, evening refreshment & dinner. The hostel committee coordinates with the mess committee for smooth running of the mess. The mess committee monitors the quality, taste and hygiene of food served in the mess. They also interact with the mess vendor to provide him with the feedback of students and to introduce possible changes in the menu. Review and inspection of the food quality is carried out at regular intervals.
          </FacilitiesText>
        </FacilitiesTop>
        <FacilitiesCard>
          <div class="row border-success mb-3">
            <div class="col-sm-6">
              <div class="card border-success">
                <div class="card-body">
                  <h5 class="card-title">Facilities : </h5>
                  <p class="card-text">•  Mess, canteen, RO water system, hot water supply through geysers in winter.</p>
                  <p class="card-text">•  Doctor is appointed for free check-up every day in the evening and college provides 24x7 medical facility.</p>
                  <p class="card-text">•  Daily newspaper (Bengali & English) and TV facility.</p>
                  <p class="card-text">•  Internet and Wi-Fi facility.</p>
                  <p class="card-text">•  Guest room for parents/ guardian/ guest person(s) at reasonable charges.</p>
                  <p class="card-text">•  24x7 guard security system.</p>
                  <p class="card-text">•  Sports (indoor & outdoor) and Gym facility is also available separately in boys and girls hostel. </p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card border-danger">
                <div class="card-body">
                  <h5 class="card-title">Rules :</h5>
                  <p class="card-text">•  Smoking, Alcohol & Narcotic consumption is strictly prohibited in and around the Hostel premises. Strict action will be taken against offenders.</p>
                  <p class="card-text">•  Students must keep the Campus & Rooms clean. Defacing walls, equipment, furniture etc., is strictly prohibited.</p>
                  <p class="card-text">•  Birthday/Other Celebrations are strictly prohibited in Hostel.</p>
                  <p class="card-text">•  Students must turn off all the electrical equipments & lights before leaving their rooms.</p>
                  <p class="card-text">•  Students are not allowed to use electric stoves, heaters etc in rooms except in designated places.</p>
                  <p class="card-text">•  Students are not allowed to organize any group activities in their room</p>

                </div>
              </div>
            </div>
          </div>
          {/* Cards */}

          <div className="container">
            <div className="row my-4">
              <div className="col-sm">
                <div class="card "  >
                  <img
                    class="card-img-top"
                    src="https://content3.jdmagicbox.com/comp/cooch_behar/f4/9999p3582.3582.170927023257.n5f4/catalogue/boys-hostel-cgec-cooch-behar-hostel-for-boy-students-kzvnz0pqdi.jpg"
                    alt="Card image cap"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card" >
                  <img
                    class="card-img-top"
                    src="https://lh5.googleusercontent.com/p/AF1QipMJhtswfO4JbnMM4WfHPgNaUl466xAjrMBSMJ3R=w1080-k-no"
                    alt="Card image cap"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div class="card" >
                  <img
                    class="card-img-top"
                    src="https://lh3.googleusercontent.com/p/AF1QipNvVvGwDULuiVsEFWK4LtXMaP-_gPfrbEEBBuGn=s1600-w400"
                    alt="Card image cap"
                    height="200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FacilitiesCard>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default Facilities;
