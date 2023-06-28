import Banner from "../../components/Banner";
import Card from "../../components/Card";
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
            { filterCategory(0).map((video) => <Card id={video.id} key={video.id} /> )}
            </Category>

            <Category category={categories[1]}>
            { filterCategory(1).map((video) => <Card id={video.id} key={video.id} /> )}
            </Category>

            <Category category={categories[2]}>
            { filterCategory(2).map((video) => <Card id={video.id} key={video.id} /> )}
            </Category>

            <Category category={categories[3]}>
            { filterCategory(3).map((video) => <Card id={video.id} key={video.id} /> )}
            </Category>

            <Category category={categories[4]}>
            { filterCategory(4).map((video) => <Card id={video.id} key={video.id} /> )}
            </Category>
        </Container>
        <Footer />
    </>
  );
}

export default HomeCategory;
