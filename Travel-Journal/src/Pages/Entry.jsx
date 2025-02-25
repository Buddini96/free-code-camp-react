// import fuji from '../assets/images/fuji.jpg'
import { FaLocationDot } from "react-icons/fa6";
import travelJournalData from "../data.js"

function Entry() {
  return (
    <div className="">
      {travelJournalData.map((data) => (
        <>
          <div className="w-full my-10 px-2 flex gap-9">
            <div key={data.id}>
              <img src={data.img} className="w-50 h-80" />
            </div>
            <div className="flex flex-col justify-center space-y-3 w-100">
              <div className="flex items-center gap-3">
                <FaLocationDot className="w-6 h-6 text-red-500" />
                <p>
                  <a href={data.googleMapLink} className="text-blue-600 underline">View on google maps</a>
                </p>
              </div>
              <h1>{data.title}</h1>
              <h3>{data.dates}</h3>
              <p className="leading-relaxed whitespace-pre-line">{data.text}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Entry
