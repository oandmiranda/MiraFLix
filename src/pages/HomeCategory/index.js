import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel/carousel";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";

function HomeCategory() {
  return (
    <>  
        <Header />
        <Banner />
        <Container>
          <Input />
            <Category category={categories[0]}>
              <Carousel >
                { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
              </Carousel> 
            </Category>

            <Category category={categories[1]}>
              <Carousel>
               { filterCategory(1).map((video) => <Card id={video.id} key={video.id} /> )}
               </Carousel>
            </Category>

            <Category category={categories[2]}>
              <Carousel>
                { filterCategory(2).map((video) => <Card id={video.id} key={video.id} /> )}
              </Carousel>
            </Category>

            <Category category={categories[3]}>
              <Carousel>
                { filterCategory(3).map((video) => <Card id={video.id} key={video.id} /> )}
              </Carousel>
            </Category>

            <Category category={categories[4]}>
              <Carousel>
               { filterCategory(4).map((video) => <Card id={video.id} key={video.id} /> )}
              </Carousel>
            </Category>
        </Container>
        <Footer />
    </>
  );
}

export default HomeCategory;
