import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ direction }) => {
  const hardcodedVideos = [
    {
      id: { channelId: "your_channel_id_1" },
      snippet: { title: "Channel 1" }
    },
    {
      id: { videoId: "your_video_id_1" },
      snippet: { title: "Video 1" }
    },
    
    {
      id: { videoId: "your_video_id_2" },
      snippet: { title: "Video 2" }
    },
    // Add more predefined videos as needed
  ];

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {hardcodedVideos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
