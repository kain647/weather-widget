import React from "react";
import { RiMapPinLine } from "react-icons/ri";

import {
  Container,
  Header,
  City,
  Icon,
  Name,
  Temperature,
  CenterIcon,
  StatsContainer,
  FirstContainer,
  FirstText,
  FirstT,
  DayContainer,
  NameDay,
  Updated,
  Country,
  FormContainer,
  Button,
  Input,
  Sun,
  Sunrise,
  Sunset
} from "./styles";

const API_KEY = "73ba5a2394ecd39a0a0848cbfa379832";

const WeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getWeekDay = n => {
  return WeekDays[n];
};
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      city: "London",
      country: "GB",
      feels: "0",
      humidity: "100",
      wind: "10",
      iconCode: "903",
      updateTime: 0,
      sunrise: 0,
      sunset: 0,
      error: "",
      cityInput: "",
      selected: getWeekDay(new Date().getDay())
    };
  }

  actualWeather = async event => {
    event.preventDefault();
    const city = this.state.cityInput;
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    //console.log(data);

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      feels: data.main.feels_like,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      iconCode: data.weather[0].id,
      updateTime: data.dt * 1000,
      sunrise: data.sys.sunrise * 1000,
      sunset: data.sys.sunset * 1000,
      cityInput: "",
      error: ""
    });
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      cityInput: value
    });
  };

  render() {
    const {
      temp,
      city,
      country,
      feels,
      humidity,
      wind,
      iconCode,
      updateTime,
      sunrise,
      sunset,
      cityInput
    } = this.state;
    const timeStamp = new Date(updateTime).toLocaleString();
    const sunsetTime = new Date(sunset).toLocaleString();
    const sunriseTime = new Date(sunrise).toLocaleString();
    const items = [
      {
        title: "Feels like:",
        subtitle: `${feels} °C`
      },
      {
        title: "Humidity:",
        subtitle: `${humidity} %`
      },
      {
        title: "Wind",
        subtitle: `${wind} m/s`
      }
    ];
    const days = [
      {
        day: "Mon"
      },
      {
        day: "Tue"
      },
      {
        day: "Wed"
      },
      {
        day: "Thu"
      },
      {
        day: "Fri"
      },
      {
        day: "Sat"
      },
      {
        day: "Sun"
      }
    ];

    return (
      <Container>
        <Header>
          <City>
            <Icon>
              <RiMapPinLine />
            </Icon>
            <Name>{city},</Name>
            <Country>{country}</Country>
          </City>
          <Temperature>{temp} °C</Temperature>
        </Header>
        <Sun>
          <Sunrise>Sunrise: {sunriseTime}</Sunrise>
          <Sunset>Sunset: {sunsetTime}</Sunset>
        </Sun>
        <CenterIcon iconCode={iconCode} />
        <StatsContainer>
          {items.map(item => {
            return <Item {...item} />;
          })}
        </StatsContainer>
        <DayContainer>
          {days.map(day => {
            return (
              <NameDay
                key={day.day}
                // onClick={() => {
                //   this.setState({
                //     selected: day.day
                //   });
                // }}
                active={day.day === this.state.selected}
              >
                {day.day}
              </NameDay>
            );
          })}
        </DayContainer>
        <Updated>Updated at: {timeStamp}</Updated>
        <FormContainer onSubmit={this.actualWeather}>
          <Input
            value={cityInput}
            onChange={this.onChange}
            type="text"
            name="city"
            placeholder="City.."
            required
          />
          <Button>Update weather</Button>
        </FormContainer>
      </Container>
    );
  }
}

const Item = props => {
  const { title, subtitle } = props;
  return (
    <FirstContainer>
      <FirstText>{title}</FirstText>
      <FirstT>{subtitle}</FirstT>
    </FirstContainer>
  );
};

export default Weather;
