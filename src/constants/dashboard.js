export const incompleteActivity = {
  icon: {
    src: "/dashboard/question.svg",
    alt: "actividad incompleta",
    background: "bg-gray-500",
  },
  type: "-",
  time: "-",
  info: "-",
  state: "No History",
};

export const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec",
]

export const navigation = [
    {
        href: "/dashboard",
        text: "Dashboard",
        image: {
            src: "/dashboard/dashboard.svg",
            alt: "dashboard",
        },
    },
    {
        href: "/dashboard/your-pets",
        text: "Tus mascotas",
        image: {
            src: "/dashboard/mascotas.svg",
            alt: "tus-mascotas",
        },
    },
    {
        href: "/dashboard/vet",
        text: "Veterinarios",
        image: {
            src: "/dashboard/veterinarios.svg",
            alt: "veterinarios",
        },
    },
    {
        href: "/dashboard/dates",
        text: "Tus Citas",
        image: {
            src: "/dashboard/tus-citas.svg",
            alt: "tus-citas",
        },
    },
    {
        href: "/dashboard/settings",
        text: "Ajustes",
        image: {
            src: "/dashboard/ajustes.svg",
            alt: "ajustes",
        },
    },
]
