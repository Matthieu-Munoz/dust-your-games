## TIPS


      {
        if (currentTheme === true) {
          return <BsFillMoonStarsFill className="themetoggle__switch" />;
        } else {
          return <BsFillSunFill className="themetoggle__switch" />;
        }
      }

      **equals to**

      {(currentTheme) ? <BsFillMoonStarsFill className="themetoggle__switch" /> : <BsFillSunFill className="themetoggle__switch" />}


      