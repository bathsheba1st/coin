import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.coins;
  // const style = { background: "#0092ff", padding: "12px 0" };
  const style = {
    background: "gray",
    position: "relative",
    top: "10px",
    border: "none",
    height: "10px",
    marginBottom: "30px",
  };

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <hr style={style} />
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Panel
              key={exchange?.uuid}
              showArrow={false}
              header={
                <>
                  <Row key={exchange?.uuid}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange?.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange?.iconUrl}
                      />
                      <Text>
                        <strong>{exchange?.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange?.["24hVolume"])}</Col>
                    <Col span={6}>{millify(exchange?.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange?.price)}%</Col>
                  </Row>
                  <hr />
                </>
              }
            >
            </Panel>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
