import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

interface DateCountdown {
  dateCountdown: Date;
}

const DateCountdown = ({ dateCountdown }: DateCountdown) => {
  return (
    <div className="space-y-3">
      <div className="space-x-3 flex items-center">
        <h2 className="text-3xl font-semibold">FLASH SALE</h2>
        <FlipClockCountdown
          to={dateCountdown}
          renderMap={[false, true, true, true]}
          digitBlockStyle={{
            backgroundColor: "red",
            width: 20,
            height: 30,
            fontSize: 15,
          }}
          showLabels={false}
          showSeparators={false}
          separatorStyle={{ size: 0 }}
        />
      </div>
      <p className="text-lg">
        Segera dapatkan penawaran terbatas dari kami, jangan sampai ketinggalan
      </p>
    </div>
  );
};

export default DateCountdown;
