app.get("/api/notices", (req, res) => {
  res.json([
    {
      title: "Exam Schedule",
      content: "Mid-sem exams start next week",
    },
    {
      title: "Holiday Notice",
      content: "College closed on Friday",
    },
  ]);
});


