import Header from "../components/Header";
import Aside from "../components/Aside";
import Form from "../components/Form";


function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Aside />
      <Form />
    </div>
  );
}

export default Home;