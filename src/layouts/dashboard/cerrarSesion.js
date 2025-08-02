import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CerrarSesion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ejecutar el SweetAlert cuando se carga el componente
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
        }).then(() => {
          // Después del éxito, regresar al dashboard
          navigate('/dashboard');
        });
      } else {
        // Si cancela, regresar al dashboard
        navigate('/dashboard');
      }
    });
  }, [navigate]);

  return (
    <div style={{
      padding: "20px",
      textAlign: "center",
      minHeight: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h2>Procesando...</h2>
      <p>Cerrando sesión...</p>
    </div>
  );
};

export default CerrarSesion;