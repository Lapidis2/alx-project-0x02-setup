import Button from '@/components/common/Button';

export default function About() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <Button size="small" shape="rounded-sm">
        Small Rounded-sm
      </Button>

      <Button size="medium" shape="rounded-md">
        Medium Rounded-md
      </Button>

      <Button size="large" shape="rounded-full">
        Large Rounded-full
      </Button>
    </div>
  );
}
