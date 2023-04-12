import { BiMenu } from "react-icons/bi";
import { useGlobalAppContext } from "../../context/AppContext";
import { Header, FeatureCard, TrainingCards, Contact } from "../../components";

const Home = () => {
  const { toggleSidebar } = useGlobalAppContext();
  console.log(toggleSidebar);
  return (
    <main className="bg-primary">
      <section className="section-center">
        <div className="md:hidden py-2">
          <button className="my-4 text-white text-4xl" onClick={toggleSidebar}>
            <BiMenu />
          </button>
        </div>

        <Header />
        <FeatureCard />
        <TrainingCards />
        <Contact />
      </section>
    </main>
  );
};

export default Home;
