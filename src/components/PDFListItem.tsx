type PdfListItemProps = {
  id: number;
  title: string;
};

export const PdfListItem = ({ id, title }: PdfListItemProps) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <div className="w-16 h-16 bg-white flex justify-center items-center p-2 w- rounded-[4px]">
        {id}
      </div>
      {title}
    </div>
  );
};
