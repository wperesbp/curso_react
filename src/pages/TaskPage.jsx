function TaskPage() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {title}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
