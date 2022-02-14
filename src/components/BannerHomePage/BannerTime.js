import { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  String.prototype.toPersian = function(){
  let num = ['۱','۲','۳','۴','۵','۶','۷','۸','۹','۰'];
  return this.replace(/[0-9]/g, function(number){
      return num[+number]
  })
  }

  const show = (localTime) => {
   localTime.toString().toPersian()
  }

  return (
    <>
      <div>
       {show(days)}:{show(hours)}:{show(minutes)}:{show(seconds)}
      </div>
    </>
  );
}

const BannerTime = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000);
  return (
    <>
      <MyTimer expiryTimestamp={time} />
    </>
  );
};

export default BannerTime;
