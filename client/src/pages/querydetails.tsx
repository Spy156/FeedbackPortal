import { FunctionComponent } from "react";
import { CheckCircle2, CircleEllipsis } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import template from "../assets/template.jpg";

const querydetails: FunctionComponent = () => {
  return (
    <div className="w-full relative left-28 rounded-3xs bg h-[700px] overflow-hidden text-left text-base text-white font-poppins">
      <div className="absolute top-[calc(50%_+_64px)] left-[96px] rounded-sm rounded-8xs bg-gray-600 [backdrop-filter:blur(4px)] w-[280px] h-[236px]">
        <div className="absolute bottom-[12px] left-[calc(50%_-_25px)] flex flex-row items-center justify-start gap-[8px]">
          <div className="w-3.5 relative rounded-[50%] bg-dimgray-100 h-3.5 [transform:_rotate(180deg)]" />
          <div className="w-2.5 relative rounded-[50%] bg-darkgray-100 h-2.5 [transform:_rotate(180deg)]" />
          <div className="w-2.5 relative rounded-[50%] bg-darkgray-100 h-2.5 [transform:_rotate(180deg)]" />
        </div>
        <div className="absolute h-[68.2%] w-[89.29%] top-[25.42%] right-[5.36%] bottom-[17.37%] left-[5.36%] max-w-full overflow-hidden max-h-full">
          <Carousel>
            <CarouselContent>
              <CarouselItem><img src={template}></img></CarouselItem>
              <CarouselItem><img src={template}></img></CarouselItem>
              <CarouselItem><img src={template}></img></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_140px)] w-[280px] h-[46px]">
          <div className="absolute top-[7px] left-[calc(50%_-_54px)] w-[108px] h-8">
            <div className="absolute top-[27px] left-[calc(50%_-_25px)] rounded-10xs bg-royalblue-100 w-[50px] h-[5px]" />
            <div className="absolute top-[0px] left-[calc(50%_-_54px)] font-semibold">
              Attachments
            </div>
            <div className="w-[60px] h-[5px] bg-primary ml-4 mt-6 rounded-sm">

            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_299px)] left-[97px]  rounded-sm rounded-8xs bg-gray-600 [backdrop-filter:blur(4px)] w-[280px] h-[353px] text-sm">
        <div className="absolute top-[calc(50%_-_87.5px)] left-[calc(50%_-_125px)] rounded-3xs w-[250px] flex flex-col items-start justify-start p-5 box-border gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="w-6 relative h-6">
                  <CheckCircle2 color="lightgreen"
                  />
                </div>
                <div className="flex flex-row items-center justify-start max-w-[300px]">
                  <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                    Submitted
                  </div>
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-0"
                  alt=""
                  src="/line.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[34px] text-xs text-darkgray-100">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                    Your Query was successfully sent.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="w-6 relative h-6">
                  <CheckCircle2 color="lightgreen"
                  />
                </div>
                <div className="flex flex-row items-center justify-start max-w-[300px]">
                  <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                    Reviewed
                  </div>
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-0"
                  alt=""
                  src="/line.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[34px] text-xs text-darkgray-100">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                    Your query has been reviewed.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start font-subtle-medium">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                <div className="w-6 relative h-6">
                  <CircleEllipsis color="darkgray"
                  />
                  <div className="absolute top-[29.17%] left-[33.33%] font-medium" />
                </div>
                <div className="flex flex-row items-center justify-start max-w-[300px] font-poppins">
                  <div className="flex-1 relative overflow-hidden text-ellipsis whitespace-nowrap">
                    Response
                  </div>
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-0"
                  alt=""
                  src="/line.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[34px] text-xs text-darkgray-100 font-poppins">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                    Please wait for our response.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[280px] h-[69px] text-base text-khaki">
          <div className="absolute top-[0px] left-[0px] rounded-t-8xs rounded-b-none box-border w-[280px] h-[70px] border-b-[1px] border-solid border-darkgray-100" />
          <div className="absolute top-[calc(50%_-_14.5px)] left-[18px] w-[245px] h-[29px]">
            <div className="absolute top-[calc(50%_-_13.5px)] left-[153px] font-semibold ml-4 text-amber-400">
              Unresolved
            </div>
            <div className="absolute top-[0px] left-[0px] text-white text-xs">
              <p className="m-0 font-semibold">Query Status:</p>
              <p className="m-0 text-5xs">(resolved/ unresolved/ others)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_206px)] left-[405px] rounded-sm bg-gray-600 [backdrop-filter:blur(4px)] w-[650px] h-[506px] font-subtle-medium">
        <div className="absolute top-[calc(50%_-_253px)] left-[0px] rounded-sm bg-gray-600 box-border w-[231px] h-[506px] border-r-[1px] border-solid border-darkgray-200" />
        <div className="absolute top-[341.7px] left-[calc(50%_-_325px)] w-[650px] h-[165px] text-xs">
          <div className="absolute top-[45.3px] left-[65px] w-[549px] h-[75px]">
            <i className="absolute top-[0px] left-[249px] flex font-light items-center w-[300px]">
              I am a TE_IT_B student, and I'd like to raise a concern regarding
              Classroom Cleanliness. Room No. 206 is not up to the usual
              standards, and there is a need for improvement. Your prompt
              attention to this matter would be greatly appreciated. Thank you.
            </i>
            <div className="absolute top-[calc(50%_-_9.5px)] left-[0px] text-base font-semibold text-darkgray-100">
              User Comment
            </div>
          </div>
        </div>
        <div className="absolute top-[271.3px] left-[calc(50%_-_325px)] box-border w-[650px] h-[71px] text-5xs text-paleturquoise border-b-[1px] border-solid border-darkgray-300">
          <div className="absolute top-[16.7px] left-[65px] w-[426px] h-[31px]">
            <div className="absolute top-[0px] left-[249px]">
              <p className="m-0 font-medium">{`Cleanliness & Sanitation`}</p>
              <p className="m-0 text-base font-semibold text-white">{`Classroom Cleanliness `}</p>
            </div>
            <div className="absolute top-[6px] left-[0px] text-base font-semibold text-darkgray-100">
              Category
            </div>
          </div>
        </div>
        <div className="absolute top-[205px] left-[calc(50%_-_325px)] box-border w-[650px] h-[66px] border-b-[1px] border-solid border-darkgray-300">
          <div className="absolute top-[23px] left-[65px] w-[280px] h-[19px]">
            <div className="absolute top-[0px] left-[249px] font-semibold">
              206
            </div>
            <div className="absolute top-[0px] left-[0px] font-semibold text-darkgray-100">
              Location
            </div>
          </div>
        </div>
        <div className="absolute top-[140px] left-[calc(50%_-_325px)] box-border w-[650px] h-[66px] border-b-[1px] border-solid border-darkgray-300">
          <div className="absolute top-[calc(50%_-_9.5px)] left-[65px] w-[355px] h-[19px]">
            <div className="absolute top-[calc(50%_-_9.5px)] left-[249px] font-semibold">
              1 March 2024
            </div>
            <div className="absolute top-[calc(50%_-_9.5px)] left-[0px] font-semibold text-darkgray-100">
              Date
            </div>
          </div>
        </div>
        <div className="absolute top-[65px] left-[calc(50%_-_325px)] box-border w-[650px] h-[76px] text-royalblue-100 border-b-[1px] border-solid border-darkgray-300">
          <div className="absolute top-[calc(50%_-_23.5px)] left-[65px] w-[354.9px] h-12">
            <div className="absolute top-[calc(50%_-_24px)] left-[249px] w-[105.9px] h-12">
              <div className="absolute top-[calc(50%_+_5px)] left-[0.1px] w-[105.8px] h-[19px]">
                <div className="absolute top-[calc(50%_-_9.5px)] left-[21.8px] font-semibold">
                  22204000
                </div>
                <img
                  className="absolute top-[calc(50%_-_6.2px)] left-[0px] w-[15.8px] h-[13.5px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_24px)] left-[0px] w-[93px] h-[19px]">
                <div className="absolute top-[calc(50%_-_9.5px)] left-[19px] font-semibold">
                  John Doe
                </div>
                <img
                  className="absolute top-[calc(50%_-_8.5px)] left-[0px] w-[12.9px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_9px)] left-[0px] font-semibold text-darkgray-100">
              User
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_325px)] box-border w-[650px] h-[66px] text-royalblue-100 border-b-[1px] border-solid border-darkgray-300">
          <div className="absolute top-[calc(50%_-_8.5px)] left-[65px] w-[332px] h-[19px]">
            <div className="absolute top-[calc(50%_-_9.5px)] left-[249px] font-semibold">
              1010324-1
            </div>
            <div className="absolute top-[calc(50%_-_9.5px)] left-[0px] font-semibold text-darkgray-100">
              Query ID
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50px] left-[404px] rounded-md bg-secondary [backdrop-filter:blur(4px)] box-border w-[652px] h-[82px] text-[30px] text-primary border-[1px] border-solid border-primary  ">
        <div className="absolute top-[calc(50%_-_22px)] left-[calc(50%_-_110px)] font-extrabold mt-2">
          Query Details:
        </div>
      </div>
    </div>
  );
};

export default querydetails;
