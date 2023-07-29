import Gambar from "../assets/images/image7.png";

const Text = () => (
  <section className="grid  grid-cols-2">
    <div className="pt-[174px]">
      <h1 className="text-4xl font-sans">
        Jadi expert bersama <br />
        edspert.id
      </h1>
      <h3 className="pt-[15px] font-sans">
        Tingkatkan skill dan pengetahuan bersama para mentor <br />
        terbaik di bidangnya, untuk siapkan karir impian anda.
      </h3>
    </div>
    <div className="pt-[80px]">
      <img className="" src={Gambar} />
      {/* <img className="pt[104px] pl-[387px] h-[202px]" src={Subtract} />
             <img className="pt[252px] pl-[157px] h-[202px]" src={SubtractB} /> */}
    </div>
  </section>
);

export default Text;
