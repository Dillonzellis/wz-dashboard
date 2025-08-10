export default function VideoRoute() {
  return (
    <>
      <hr className="my-4 border-t border-t-neutral-500 md:my-12" />
      <div className="flex flex-col items-center justify-center">
        <div className="pb-2 text-2xl font-semibold">Optimized Route</div>
        <iframe
          width="327"
          height="582"
          src="https://www.youtube.com/embed/S6zXDzSzs6w"
          title="Specialist Roof and Middle Floor Easter Eggs Spawns #warzone"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
