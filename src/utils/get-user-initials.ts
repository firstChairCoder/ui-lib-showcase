function getUserInitials(name?: string) {
  const parts = name?.toUpperCase().split(" ");
  let initials = "";

  parts?.forEach((part) => (initials += part[0]));

  return initials;
}

export default getUserInitials;
