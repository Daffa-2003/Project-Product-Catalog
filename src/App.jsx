import Footer from "./components/Footer";
import Section from "./components/Section";

import Text from "./components/Text.jsx";

function App() {
  const navItem = ["Program", "Bidang ilmu", "Tentang edspert", <button className="bg-[#FF6161] rounded-full border-[0px] p-[5px] ">Masuk/Daftar</button>];

  const contents = [
    {
      text: "Intensive Bootcamp",
      title: "Laravel",
      content: "(Getting Startedd with Laravel 9)",
      title2: "Programming Laravel",
      title3: "Getting Started with Laravel 9",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "Laravel",
      content: "(Getting Startedd with Laravel 9)",
      title2: "Programming Laravel",
      title3: "Getting Started with Laravel 9",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "Laravel",
      content: "(Getting Startedd with Laravel 9)",
      title2: "Programming Laravel",
      title3: "Getting Started with Laravel 9",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "Laravel",
      content: "(Getting Startedd with Laravel 9)",
      title2: "Programming Laravel",
      title3: "Getting Started with Laravel 9",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "Flutter",
      content: "(Getting Startedd with Fluter)",
      title2: "Programming Fluter",
      title3: "Getting Started with Fluter",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "React JS",
      content: "(Getting Startedd with React JS",
      title2: "Programming React JS",
      title3: "Getting Started with React JS",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "Laravel",
      content: "(Getting Startedd with Laravel 9)",
      title2: "Programming Laravel",
      title3: "Getting Started with Laravel 9",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
    {
      text: "Intensive Bootcamp",
      title: "Golang",
      content: "(Getting Startedd with Golang",
      title2: "Programming Golang",
      title3: "Getting Started with Golang",
      batch: "Batch",
      bulan: "September 2022",
      mentor: "Mentor",
      orang: "William Hartono, Farel Prayoga",
      price: "Rp 500.000",
      Price2: "Rp 100.000",
    },
  ];

  return (
    <>
      <header className="bg-[#152A46] text-white  py-[28px] px-[120px] h-[584px]">
        <div className="flex justify-between ">
          <h1 className="text-[20px] font-[700px]">LOGO</h1>
          <nav>
            <ul className="m-0 p-0 justify-items-end list-none">
              {navItem.map((item) => (
                <li className="inline-block mr-[10px]" key={item}>
                  <a className="text-white " href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Text />
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-[20px] bg-sky-100">
        {contents.map((item) => (
          <Section
            key={item.title}
            text={item.text}
            title={item.title}
            content={item.content}
            title2={item.title2}
            title3={item.title3}
            batch={item.batch}
            bulan={item.bulan}
            mentor={item.mentor}
            orang={item.orang}
            price={item.price}
            price2={item.Price2}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
