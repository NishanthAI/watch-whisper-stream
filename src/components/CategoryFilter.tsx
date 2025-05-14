
import { categories } from "@/data/videos";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: string;
  onChange: (categoryId: string) => void;
}

const CategoryFilter = ({ selectedCategory, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(category.id)}
          className={
            selectedCategory === category.id
              ? "bg-streaming-primary hover:bg-streaming-primary/90"
              : "bg-streaming-muted/50 border-streaming-border text-streaming-foreground hover:bg-streaming-muted"
          }
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
