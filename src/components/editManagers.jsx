import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
export default function EditManager({ wallet }) {
  const [data, setData] = useState({
    dateTime: dayjs("2023-01-10T21:11:54"),
    interviewer: "",
  });

  return (
    <div className="bg-white p-[30px] rounded-lg">
      <p className="m-auto inset-0 text-xl font-semibold leading-7  text-gray-800 mb-[20px]">
        {" "}
        Hiring: {wallet}
      </p>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot /> <TimelineConnector />
          </TimelineSeparator>
          <div className="flex flex-col">
            <TimelineContent>Setup a meeting </TimelineContent>
            <div className="ml-[20px] mt-[10px] flex gap-4">
              <TextField
                required
                id="outlined-required"
                label="Interviewer"
                value={data.interviewer}
                onChange={(e) => {
                  setData({ ...data, interviewer: e.target.value });
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Date & Time"
                  value={data.dateTime}
                  onChange={(e) => {
                    setData({ ...data, dateTime: e.value });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
