import React, { FC } from "react";
import styled from "styled-components";

import { LinkCard } from "../LinkCard";

const LinksCollectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

export const LinksCollection: FC = () => {
  const links: {
    title: string;
    link: string;
    linkDescription: string;
    date: string;
  }[] = [
    {
      title: "The Best Times of the Day to Buy and Sell Stocks",
      link:
        "https://www.thebalance.com/best-time-s-of-day-to-day-trade-the-stock-market-1031361",
      linkDescription:
        "Sometimes less is more when it comes to day-trading. Devoting two to three hours a day is often better for most traders of stocks, stock index futures, and index-based exchange-traded funds (ETFs) than buying and selling stocks the entire day, for a couple of reasons. ",
      date: "10 Dec, 2019"
    },
    {
      title: "Rules for Picking Stocks When Intraday Trading",
      link:
        "https://www.investopedia.com/day-trading/pick-stocks-intraday-trading/",
      linkDescription:
        "There are thousands of equities to choose from, and day traders can pick virtually any sort of stock they want. So the first step in day trading is figuring out what to trade. Once one, or several, stocks or ETFs have been selected, the next step is coming up with some ways to profit from them.",
      date: "10 Dec, 2019"
    },
    {
      title: "Pick Colors for your Website",
      link: "https://htmlcolorcodes.com/",
      linkDescription:
        "Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!",
      date: "10 Dec, 2019"
    },
    {
      title:
        "Want to invest in global companies? This US-based startup can help",
      link:
        "https://yourstory.com/2019/12/global-investment-startup-stockal-us-stock-broking",
      linkDescription:
        "The stock markets, while a risky form of investment, yield one of the highest returns. And the US is home to some of the fastest-growing companies in the world and has a lucrative stock market. However, making money on stocks isn’t.  Currently, wealth management firms that offer global investing opportunities come with large minimum account requirements, rigid investing plans, extra costs for research, high commissions, and entry/exit loads. Additionally, diversifying wealth outside of local markets and across asset classes can also be cumbersome and expensive.",
      date: "10 Dec, 2019"
    },
    {
      title: "The Best Times of the Day to Buy and Sell Stocks",
      link:
        "https://www.thebalance.com/best-time-s-of-day-to-day-trade-the-stock-market-1031361",
      linkDescription:
        "Sometimes less is more when it comes to day-trading. Devoting two to three hours a day is often better for most traders of stocks, stock index futures, and index-based exchange-traded funds (ETFs) than buying and selling stocks the entire day, for a couple of reasons. ",
      date: "10 Dec, 2019"
    },
    {
      title: "The Best Times of the Day to Buy and Sell Stocks",
      link:
        "https://www.thebalance.com/best-time-s-of-day-to-day-trade-the-stock-market-1031361",
      linkDescription:
        "Sometimes less is more when it comes to day-trading. Devoting two to three hours a day is often better for most traders of stocks, stock index futures, and index-based exchange-traded funds (ETFs) than buying and selling stocks the entire day, for a couple of reasons. ",
      date: "10 Dec, 2019"
    },
    {
      title: "The Best Times of the Day to Buy and Sell Stocks",
      link:
        "https://www.thebalance.com/best-time-s-of-day-to-day-trade-the-stock-market-1031361",
      linkDescription:
        "Sometimes less is more when it comes to day-trading. Devoting two to three hours a day is often better for most traders of stocks, stock index futures, and index-based exchange-traded funds (ETFs) than buying and selling stocks the entire day, for a couple of reasons. ",
      date: "10 Dec, 2019"
    },

    {
      title: "The Best Times of the Day to Buy and Sell Stocks",
      link:
        "https://www.thebalance.com/best-time-s-of-day-to-day-trade-the-stock-market-1031361",
      linkDescription:
        "Sometimes less is more when it comes to day-trading. Devoting two to three hours a day is often better for most traders of stocks, stock index futures, and index-based exchange-traded funds (ETFs) than buying and selling stocks the entire day, for a couple of reasons. ",
      date: "10 Dec, 2019"
    },
    {
      title: "The Best Times of the Day to Buy and Sell Stocks",
      link:
        "https://www.thebalance.com/best-time-s-of-day-to-day-trade-the-stock-market-1031361",
      linkDescription:
        "Sometimes less is more when it comes to day-trading. Devoting two to three hours a day is often better for most traders of stocks, stock index futures, and index-based exchange-traded funds (ETFs) than buying and selling stocks the entire day, for a couple of reasons. ",
      date: "10 Dec, 2019"
    }
  ];
  return (
    <LinksCollectionWrapper>
      {links.map((link, linkIndex) => (
        <LinkCard
          title={link.title}
          link={link.link}
          linkDescription={link.linkDescription}
          date={link.date}
        />
      ))}
    </LinksCollectionWrapper>
  );
};
