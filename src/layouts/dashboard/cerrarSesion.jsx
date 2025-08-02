// En tu componente Sidebar/Sidenav, agregar al inicio:
import Swal from 'sweetalert2';

// Función para manejar el logout
const handleLogout = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#e74c3c',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, Cerrar Sesión',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: '¡Sesión cerrada!',
        text: 'Has cerrado sesión exitosamente',
        icon: 'success',
        confirmButtonColor: '#28a745'
      });
    }
  });
};

// En el mapeo de rutas, agregar esta condición:
// Donde tengas algo como routes.map((route) => { ... })
// Modificar para detectar el action:

const renderRoute = (route) => {
  // Si es logout, manejar diferente
  if (route.action === "logout") {
    return (
      <SidenavItem 
        key={route.key}
        name={route.name}
        icon={route.icon}
        onClick={handleLogout}  // Ejecutar función en lugar de navegar
      />
    );
  }
  
  // Para rutas normales, usar la lógica existente
  return (
    <NavLink to={route.route} key={route.key}>
      <SidenavItem 
        name={route.name}
        icon={route.icon}
        active={route.route === location.pathname}
      />
    </NavLink>
  );
}