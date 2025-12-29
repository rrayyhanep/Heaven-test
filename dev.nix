{ pkgs, ... }: {
  previews = [
    {
      port = 3000;
      name = "Web";
      description = "Next.js development server preview";
    }
  ];
}
