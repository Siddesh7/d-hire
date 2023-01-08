import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useEffect, useRef, useState } from "react";
import { Button, Link } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useAccount, useEnsAddress, useEnsName } from "wagmi";
import axios from "axios";
export default function EditManager({ wallet, company, role, url }) {
  console.log(wallet, company, role, url);
  const { data: ENSName } = useEnsName({
    address: wallet,
  });
  const { address } = useAccount();
  const [access, setAccess] = useState(null);
  const [data, setData] = useState([
    {
      dateTime: "",
      interviewer: "",
      uuid: uuid(),
    },
  ]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/api/jobmanager?url=${url}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.interview);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [allow, setAllow] = useState(null);
  const addFields = () => {
    let newfield = {
      dateTime: "",
      interviewer: "",
      uuid: uuid(),
    };

    setData([...data, newfield]);
  };
  const deleteFields = (index) => {
    console.log(index);
    let fieldToBeDeleted = data[index];
    const filteredObjects = data.filter((obj) => obj !== fieldToBeDeleted);
    setData(filteredObjects);
  };
  const handleFormChange = (index, e) => {
    const arr = [...data];

    arr[index] = { ...arr[index], [e.target.name]: e.target.value };

    setData(arr);
    console.log(data);
  };
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_HOST}/api/create?wallet=${wallet}&company=${company}&role=${role}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAccess(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (access && address) {
      setAllow(
        address.toLowerCase() === access[0].candidateAddress ||
          address.toLowerCase() === access[0].manager
      );
    }
  }, [access, address]);

  const handleSubmit = (event) => {
    const dataToBeSent = {
      URL: url,
      interview: data,
    };
    console.log(dataToBeSent);

    axios
      .post(`${process.env.REACT_APP_HOST}/api/jobmanager`, dataToBeSent)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      {address && (
        <div>
          {allow ? (
            <div className="bg-white p-[30px] rounded-lg">
              <div className="flex justify-between items-center  mb-[20px]">
                <p className="text-left text-xl font-semibold leading-7  text-gray-800">
                  Hiring: {ENSName ? ENSName : wallet}
                </p>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    console.log(data);
                    handleSubmit();
                  }}
                >
                  Save
                </Button>
              </div>

              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                {data.map((meeting, index) => (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot /> <TimelineConnector />
                    </TimelineSeparator>
                    <div className="flex flex-col">
                      <TimelineContent>Setup a meeting </TimelineContent>
                      <div className="ml-[20px] mt-[10px] flex gap-4">
                        <TextField
                          required
                          name="interviewer"
                          id="outlined-required"
                          label="Interviewer"
                          placeholder="ENS/Address"
                          value={data[index].interviewer}
                          onChange={(event) => {
                            handleFormChange(index, event);
                          }}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="Date & Time"
                            value={data[index].dateTime}
                            name="dateTime"
                            onChange={(value) => {
                              var date = new Date(value["$d"]);
                              const arr = [...data];

                              arr[index] = { ...arr[index], dateTime: date };

                              setData(arr);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>

                        <Link
                          className="h-[100%]"
                          href={`/call/${meeting.uuid}`}
                        >
                          <Button className="h-[100%]" variant="contained">
                            Join meeting Room
                          </Button>
                        </Link>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => {
                            deleteFields(index);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </TimelineItem>
                ))}
              </Timeline>

              <div className="my-[20px]">
                <Button onClick={addFields}>Add a new meeting</Button>
              </div>
            </div>
          ) : (
            <p>Sorry, You cannot access this page!</p>
          )}
        </div>
      )}
    </>
  );
}
